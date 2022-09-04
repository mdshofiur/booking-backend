import SchemaUser from "../model/auth.model.js";


export async function UserupdateById(req, res) {
  const filter = req.params.id;
  const update = req.body;

  try {
    const updateData = await SchemaUser.findByIdAndUpdate(
      filter,
      { $set: update },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updateData);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function UserdeleteById(req, res) {
  const filter = req.params.id;

  try {
    const updateData = await SchemaUser.findOneAndDelete(filter);
    res.status(200).json(updateData);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getallUser(req, res) {
  try {
    const updateData = await SchemaUser.find();
    res.status(200).json(updateData);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getUserById(req, res) {
  const filter = req.params.id;
  try {
    const getDataById = await SchemaUser.findById(filter);
    res.status(200).json(getDataById);
  } catch (err) {
    res.status(500).json(err);
  }
}
