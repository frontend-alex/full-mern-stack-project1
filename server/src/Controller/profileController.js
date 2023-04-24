const User = require("../Schemas/User");
const profileService = require("../Services/profileService");

exports.postEditProfile = async (req, res) => {
  const { userPfp, username, bio, userId } = req.body;

  const user = await profileService.getUser(userId);

  await profileService
    .updateProfile(userId, {
      userPfp,
      username,
      bio,
    })
    .then(() =>
      res.json({
        status: 201,
        message: "Profile Successufully updated!",
      }),
    )
    .catch((err) => res.json({ status: 201, error: err }));
};


exports.getProfile = async (req, res) => {
  const { userId } = req.params

  const user = await profileService.getUserId(userId);

  res.json(user)
}