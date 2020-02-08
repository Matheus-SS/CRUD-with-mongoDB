//the name of import must be the same from the model
import AnimeModel from '../models/schemas/Anime';

class AnimeController {
  // store a anime
  async store(req, res) {
    //methods are from mongoose NOT from mongoDB
    const anime = await AnimeModel.create({
      id_anime: req.body.id_anime,
      title: req.body.title,
      year: req.body.year,
    });
    return res.json(anime);
  }

  //find a unique anime
  async show(req, res) {
    const anime = await AnimeModel.findOne({
      id_anime: req.params.id,
    });
    return res.json(anime);
  }

  //show all anime
  async index(req, res) {
    const anime = await AnimeModel.find();
    return res.json(anime);
  }

  async update(req, res) {
    const filter = {id_anime: req.params.id};
    const animeExists = await AnimeModel.findOne(filter);

    if (!animeExists) {
      return res.status(400).json({error: 'anime does not exists'});
    }
    const anime = await AnimeModel.findOneAndUpdate(
      //object to be filtered
      filter,
      {
        //objects to replace the object found
        title: req.body.title,
        year: req.body.year,
      },
      {
        //set the new option to true to return the document
        //after update was applied.
        new: true,
      }
    );
    return res.json(anime);
  }

  async delete(req, res) {
    const filter = {id_anime: req.params.id};

    const anime = await AnimeModel.deleteOne(filter);

    return res.json({'Documents deleted': anime.deletedCount});
  }
}
export default new AnimeController();
