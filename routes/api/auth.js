const express = require('express');
const jwt = require('jsonwebtoken')
const config = require('config');
const router = express.Router();
const bcrypt = require('bcryptjs');

const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/authMiddleware');

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
});

// route for Authenticating User and getting back token
router.post('/', [

    check('email', 'Please include a  valid Email')
        .isEmail(),
    check('password', 'Password is required').exists()

],

    async (req, res) => {
        // console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            //see if user exists
            let user = await User.findOne({ email });
            if (!user) {
                res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] })
            }

            // bcrypt has a method which takes in a text password 
            // and a encrypted password and tell you if they match................. compare returns a promise
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) {
                res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] })

            }



            //Return jasonwebtoken
            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(payload, config.get("jwtSecret"),
                {
                    expiresIn: 36000
                }, (err, token) => {
                    if (err) throw err;

                    res.json({ token })
                });




        } catch (err) {
            console.error(err);
            res.status(500).send("Authentication-Server error");

        }




    }
);

module.exports = router;