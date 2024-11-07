
import mongoose, { Document, Schema} from "mongoose"

interface IChatMessage extends Document{
    user: string,
    message: string,
    timeStamp:Date,
    fromBot:boolean,
}

const chatMessageSchema: Schema = new Schema({
    user: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    fromBot: { type: Boolean, default: false },
});

export default mongoose.model<IChatMessage>('ChatMessage',chatMessageSchema);