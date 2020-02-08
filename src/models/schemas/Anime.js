import mongoose from 'mongoose';

const AnimeSchema = new mongoose.Schema({
  id_anime: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('AnimeModel', AnimeSchema);
