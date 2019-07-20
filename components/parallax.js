import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Parallax extends Component {
  static propTypes = {
    /**
     * Render prop.
     *
     * @param {number} top position of the parallax effect.
     */
    render: PropTypes.node,
    /**
     * Speed at which the parallax effect scrolls.
     * Higher values make the object appear closer.
     */
    speed: PropTypes.number
  };

  static defaultProps = {
    speed: 0.4
  };

  state = { top: 0, offset: 0 };

  componentDidMount() {
    this.scroll();
    document.addEventListener('scroll', this.scroll);
  }

  componentWillUnmount() {
    document, removeEventListener('scroll', this.scroll);
  }

  scroll = () => {
    const { speed } = this.props;
    const { pageYOffset } = window;
    const offset = -pageYOffset * speed;
    const top = `${offset}px`;
    this.setState({ top, offset });
  };

  render() {
    const { render } = this.props;
    const { top, offset } = this.state;

    return render(top, offset);
  }
}
