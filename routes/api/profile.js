const express = require('express');
const router = express.Router();
const auth = require('../../middleware/authMiddleware')
const Profile = require('../../models/Profile')
const User = require('../../models/User')
const { check, validationResult } = require('express-validator');



// route for getting user profile
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id })    // this user is getting through profile model

        if (!profile) {
            return res.status(400).json([{ msg: "There is no profile for this user" }])
        }
        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Profile-server Error')

    }
});

// creating user Profile
router.post('/', auth, async (req, res) => {

    const errors = validationResult(req).body;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // if (req.files === null) {
    //     return res.status(400).json({ msg: 'PLease Uplaod Picture' })
    // }
    // const file = req.files.file
    // file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    //     if (err) {
    //         console.error(err);
    //         return res.status(500).send(err);
    //     }
    //     res.json({ fileName: file.name, filePath: `uploads/${file.name}` })
    // })
    const { name, city, gender, program, picture } = req.body;
    //Build Profile Object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (name) profileFields.name = name;
    if (program) profileFields.program = program;
    // if (picture) profileFields.picture = picture;
    if (city) profileFields.city = city;
    if (gender) profileFields.gender = gender


    try {
        // let profile = await Profile.findOne({ user: req.user.id });

        // if (profile) {
        //     //updatte the profile
        //     profile = await Profile.findOneAndUpdate(
        //         { user: req.user.id },
        //         { $set: profileFields },
        //         { new: true });

        //     return res.json(profile);


        // }

        // if not found then we would create
        profile = new Profile(profileFields);
        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Profile-Server Error ");

    }

})

//@route  Get Api/profile
//@desc  get all user profile 
//@access Public

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'program'])
        res.json(profiles);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server Error");

    }
});
//@route  Get api/profile/user/:user_id
//@desc  get Profile by user ID
//@access Public

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'program']);

        if (!profile) return res.status(400).json({ msg: "Profile not found" });

        res.json(profile);

    } catch (error) {
        console.error(error.message);
        if (error.kind == 'ObjectId');
        res.status(500).json({ msg: "Profile not found" });

    }
});

//@route  DELETE api/profile
//@desc   delete a profile,user and posts
//@access Private

router.delete('/', auth, async (req, res) => {
    try {
        //@todo- Removing Posts

        //Removing Profile
        await Profile.findOneAndRemove({ user: req.user.id });
        // Removing User
        await User.findOneAndRemove({ _id: req.user.id });
        res.json({ msg: " User removed" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("server Error");

    }
});



module.exports = router;    