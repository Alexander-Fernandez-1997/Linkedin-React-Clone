import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import React from "react";
import "./Feed.css";
import { InputOption } from "./InputOption";
import { Post } from "./Post";

export const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create></Create>
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={Image} color="#70B5F9 " title="Photo" />
          <InputOption Icon={Subscriptions} color="#E7A33E " title="Video" />
          <InputOption Icon={EventNote} color="#C0CBCD " title="Event" />
          <InputOption
            Icon={CalendarViewDay}
            color="#7FC15E "
            title="Write article"
          />
        </div>
      </div>
      <Post
        name="Alexander Fernandez"
        description="this is a test"
        message="this is working fine"
      />
    </div>
  );
};
