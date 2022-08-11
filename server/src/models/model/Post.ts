import { Schema, Types, Document, model } from 'mongoose';

export interface IPostType extends Document {
  id: string;
  title: string;
  date: string;
  category: string;
  tags: Types.Array<string>;
  description: string;
  author: string;
  markdown: string;
}

const PostSchema = new Schema<IPostType>({
  id: { type: String, default: '', require: true },
  title: { type: String, default: '', require: true },
  date: { type: String, default: '', require: true },
  category: { type: String, default: '', require: true },
  tags: { type: [String], default: [], require: true },
  description: { type: String, default: '', require: true },
  author: { type: String, default: '', require: true },
  markdown: { type: String, default: '', require: true },
});

export default model<IPostType>('Post', PostSchema, 'post');
