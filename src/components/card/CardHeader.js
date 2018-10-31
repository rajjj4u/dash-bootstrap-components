import PropTypes from 'prop-types';
import {CardHeader as RSCardHeader} from 'reactstrap';

const CardHeader = props => {
  const {children, ...otherProps} = props;
  return <RSCardHeader {...otherProps}>{children}</RSCardHeader>;
};

CardHeader.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string,

  /**
   * The children of this component
   */
  children: PropTypes.node,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: PropTypes.object,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: PropTypes.string,

  /**
   * HTML tag to use for the card header, default: div
   */
  tag: PropTypes.string
};

export default CardHeader;
