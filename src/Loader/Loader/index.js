/**
 * Global loader component that can be wrapped around any element.
 * If the component is in loading state, an animated css-loader will be shown instead of the content.
 */
import React from 'react';

import SmallLoader from '../SmallLoader';
import InlineLoader from '../InlineLoader';
import BigLoader from '../BigLoader';
import BigLoaderStandalone from '../BigLoaderStandalone';

/**
 * Class representing a Loader.
 * The tag property allows the component to fetch the correct loader.
 * @namespace NewLoader
 * @extends React.Component
 */
class Loader extends React.Component {
    constructor (props) {
        super(props);
    }

    getLoader (type) {
        const loaders = {
            small: () => {
                return (
                    <SmallLoader loading={this.props.loading}>
                        {this.props.children}
                    </SmallLoader>
                );
            },
            inline: () => {
                return (
                    <InlineLoader loading={this.props.loading}>
                        {this.props.children}
                    </InlineLoader>
                );
            },
            big: () => {
                return (
                    <BigLoader loading={this.props.loading}>
                        {this.props.children}
                    </BigLoader>
                );
            },
            default: () => {
                return (
                    <BigLoaderStandalone loading={this.props.loading} />
                );
            }
        };

        return (loaders[type] || loaders.default)();
    }

    render () {
        let loaderType;

        if (!this.props.type) {
            loaderType = this.props.children ? 'big' : 'default';
        } else {
            loaderType = this.props.type;
        }

        return (
            this.getLoader(loaderType)
        );
    }
}

/**
 * @memberof NewLoader
 * @namespace props
 * @prop {Object} propTypes         - Props that are passed to this component
 */
Loader.propTypes = {
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} loading      - Toogle the loading state
     */
    loading: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {string} type          - Type of the loader which should be returned
     */
    type: React.PropTypes.string
};

export default Loader;
export { Loader as Loader };
