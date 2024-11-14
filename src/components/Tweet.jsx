import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({tweet}) {

  const {
    user: {name, image, handle},
    timestamp,
    message
  } = tweet;
  
  return (
    <div className="tweet">
      <ProfileImage image={image}></ProfileImage>

      <div className="body">
      <div className="top">
        <User name={name} handle={handle}></User>
        <Timestamp timestamp={timestamp}></Timestamp>
      </div>
        <Message message={message}></Message>
        <Actions></Actions>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
 