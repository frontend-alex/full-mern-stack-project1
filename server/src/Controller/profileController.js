const User = require("../Schemas/User");
const profileService = require("../Services/profileService");

exports.postEditProfile = async (req, res) => {
  const { userPfp, bio, userId } = req.body;

  await profileService
    .updateProfile(userId, {
      userPfp,
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