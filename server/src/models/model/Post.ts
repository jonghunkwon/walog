import { Schema, Types, Document, model, PaginateModel } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

export interface IPostType extends Document {
  id: string;
  title: string;
  date: string;
  category: string;
  tags: Types.Array<string>;
  description: string;
  author: string;
  content: string;
  createAt?: Date;
}

const PostSchema = new Schema<IPostType>({
  id: { type: String, default: '', require: true },
  title: { type: String, default: '', require: true },
  date: { type: String, default: '', require: true },
  category: { type: String, default: '', require: true },
  tags: { type: [String], default: [], require: true },
  description: { type: String, default: '', require: true },
  author: { type: String, default: '', require: true },
  content: { type: String, default: '', require: true },
  createAt: { type: Date, default: Date.now, require: true },
});
PostSchema.plugin(mongoosePaginate);

export default model<IPostType, PaginateModel<IPostType>>(
  'Post',
  PostSchema,
  'post'
);
