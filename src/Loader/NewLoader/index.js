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
 * Class representing a NewLoader in different variations.
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
            <SmallLoader loading={this.props.loading} />
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
        if (this.props.loading && this.props.big && this.props.children) {
            this.loader = this.getLoader();
        }
        if (this.props.inline && this.props.loading && this.props.children) {
            this.loader = this.getInlineLoader();
        }
        if (this.props.small && this.props.loading) {
            this.loader = this.getSmallLoader();
        }
        if (!this.props.small && this.props.loading) {
            this.loader = this.getBigLoader();
        }

        return (
            <div>
                {this.loader}
            </div>
        );
    }
}

NewLoader.propTypes = {
    loading: React.PropTypes.bool,
    small: React.PropTypes.bool,
    inline: React.PropTypes.bool
};


export { NewLoader as NewLoader };
