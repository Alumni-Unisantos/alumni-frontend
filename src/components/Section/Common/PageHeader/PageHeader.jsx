import Link from "next/link";

const PageHeader = ({ title }) => {
  return (
    <div className="zubuz-breadcrumb">
      <div className="container">
        <h1 className="post__title">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
