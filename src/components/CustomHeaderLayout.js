import PropTypes from 'prop-types';

const CustomHeaderLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Header Personalizado</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

CustomHeaderLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomHeaderLayout;
