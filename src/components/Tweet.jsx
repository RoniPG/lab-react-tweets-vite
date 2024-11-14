import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({ tweet }) {

  const {
    user: { USER_NAME, image: IMAGE_URL, USER_HANDLE },
    TWEET_TIMESTAMP,
    TWEET_MESSAGE
  } = tweet;

  return (
    <div className="tweet">
      <ProfileImage image={IMAGE_URL}></ProfileImage>

      <div className="body">
        <div className="top">
          <User name={USER_NAME} handle={USER_HANDLE}></User>
          <Timestamp time={TWEET_TIMESTAMP}></Timestamp>
        </div>
        <Message message={TWEET_MESSAGE}></Message>
        <Actions></Actions>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
