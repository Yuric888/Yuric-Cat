import './ViewCard.css'
const ViewCard = (props) => {
  const {state, hide} = props;
  console.log('object :>> ', props);
  return (
    <div className={state.showViewCard ? "wrapper-view active" : "wrapper-view"}
        onClick={hide}
    >
      <div className={state.showViewCard ? "container-view active" : "container-view"}
        onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >ViewCard</div>
    </div>
  )
}

export default ViewCard