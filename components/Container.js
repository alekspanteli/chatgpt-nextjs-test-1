import classNames from "classnames";

const Container = ({ children, className }) => {
  return <div className={classNames("container", className)}>{children}</div>;
};

export default Container;
