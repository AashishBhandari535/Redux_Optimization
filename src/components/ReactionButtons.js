import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ item }) => {
  const dispatch = useDispatch();
  const {id} = item
const addReaction = (name) => {
        let value=item.reactions[name]
        value = value+1
     dispatch({ type: "REACTION_ADDED", payload:{id,name,value} });
};
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>addReaction(name)}
      >
        {emoji} {item.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
