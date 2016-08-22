/**
 * Global loader component that can be wrapped around any element.
 * If the component is in loading state, an animated css-loader will be shown instead of the content.
 */
import React from 'react';

import BigLoader from '../BigLoader';
import SmallLoader from '../SmallLoader';
import InlineLoader from '../InlineLoader';
import Loader from '../Loader';

/**
 * Class representing a NewLoader.
 * The tag property allows the button to be used in various situations
 * @namespace NewLoader
 * @extends React.Component
 */
class NewLoader extends React.Component {
    constructor (props) {
        super(props);
        this.loader = this.getBigLoader();
    }

    getBigLoader () {
        return (
            <BigLoader loading={this.props.loading} />
        );
    }

    getSmallLoader () {
        return (
            <SmallLoader loading={this.props.loading}>
                {this.props.children}
            </SmallLoader>
        );
    }

    getInlineLoader () {
        return (
            <InlineLoader loading={this.props.loading}>
                {this.props.children}
            </InlineLoader>
        );
    }

    getLoader () {
        return (
            <Loader loading={this.props.loading}>
                {this.props.children}
            </Loader>
        );
    }

    render () {
        if (this.props.loading && this.props.children && !this.props.inline) {
            this.loader = this.getLoader();
        }
        if (this.props.inline && this.props.loading) {
            this.loader = this.getInlineLoader();
        }
        if (this.props.small && this.props.loading && !this.props.inline) {
            this.loader = this.getSmallLoader();
        }
        if (!this.props.small && this.props.loading && !this.props.inline && this.props.big) {
            this.loader = this.getBigLoader();
        }

        return (
            <div>
                {this.loader}
            </div>
        );
    }
}

/**
 * @memberof NewLoader
 * @namespace props
 * @prop {Object} propTypes         - the props that are passed to this component
 */
NewLoader.propTypes = {
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} big          - show the big loading indicator
     */
    big: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} inline       - should the loading indicator be used inline?
     */
    inline: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} loading      - toogle loading state
     */
    loading: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} small        - show the small loading indicatpr
     */
    small: React.PropTypes.bool
};

export default NewLoader;
export { NewLoader as NewLoader };
