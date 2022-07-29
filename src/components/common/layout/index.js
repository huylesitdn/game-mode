import './index.scss'

function Layout(props) {
  return (
    <div className="main">
      {props.children}
    </div>
  );
}

export default Layout;
