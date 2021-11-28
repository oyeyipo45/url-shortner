import mongoose from 'mongoose';
import shortid from 'shortid';


const UrlSchema = mongoose.Schema(
  {
    longUrl: {
      type: String,
      required: true,
    },
    shortenedUrl: {
      type: String,
      required: true,
      unique: true,
      default: shortid.generate,
    },
    clicks: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Url = mongoose.model('Url', UrlSchema);

export default Url;
