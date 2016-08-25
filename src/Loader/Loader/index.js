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
            small: SmallLoader,
            inline: InlineLoader,
            big: BigLoader,
            bigLoader: BigLoaderStandalone
        };

        return (loaders[type] || loaders.bigLoader);
    }

    render () {
        let loaderType;

        if (!this.props.type) {
            loaderType = this.props.children ? 'big' : 'default';
        } else {
            loaderType = this.props.type;
        }

        const SelectedLoader = this.getLoader(loaderType);
        return (
            <SelectedLoader {...this.props}>{this.props.children}</SelectedLoader>
        );
    }

}

/**
 * @memberof NewLoader
 * @namespace props
 * @prop {Object} propTypes                 - Props that are passed to this component.
 */
Loader.propTypes = {
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} loading              - Toogle the loading state.
     */
    loading: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {string} type                  - Type of the loader which should be returned.
     */
    type: React.PropTypes.string,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} renderAsDiv          - SmallLoader: Should the SmallLoader be rendered as a div?
     */
    renderAsDiv: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} centerFromTop        - BigLoader: Should the BigLoader be vertically centered?
     */
    centerFromTop: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} floatCSS             - BigLoader: CSS value for float to const the loader float
     */
    floatCSS: React.PropTypes.string,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} correctCenter        - BigLoader: Use the correct centering for the circle, looks better for small areas
     */
    correctCenter: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} longDelay            - BigLoader: Use the correct centering for the circle, looks better for small areas
     */
    longDelay: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} noBackground         - BigLoader: Set background white and show a shadow.
     */
    noBackground: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} noSpinner            - BigLoader: Don't show the spinner while loading
     */
    noSpinner: React.PropTypes.bool,
    /**
     * @memberof InlineLoader.props
     * @prop {Boolean} white                - InlineLoader: Show the loading indicator in white
     */
    white: React.PropTypes.bool
};

export default Loader;
export { Loader as Loader };
