import "./tagbar.css"

const Tagbar = () => {
  const tags = ["Novel", "drama", "busineess","busineess","busineess","busineess","busineess"];

  return (
    <div class="header-2">
      <div className="tags">
        {tags.map((items) => {
          return <div className="tag">{items}</div>;
        })}
      </div>
    </div>
  );
};
export default Tagbar;
