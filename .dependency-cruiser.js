module.exports = {
    forbidden: [
    ],
    options: {
        babelConfig:{
            fileName: 'babel.config.json'
        },
        /* conditions specifying which files not to follow further when encountered:
         - path: a regular expression to match
         - dependencyTypes: see https://github.com/sverweij/dependency-cruiser/blob/master/doc/rules-reference.md#dependencytypes
         for a complete list
         */
        doNotFollow: {
            path: 'node_modules',
            dependencyTypes: ['npm', 'npm-dev', 'npm-optional', 'npm-peer', 'npm-bundled', 'npm-no-pkg'],
        },

        /* conditions specifying which dependencies to exclude
         - path: a regular expression to match
         - dynamic: a boolean indicating whether to ignore dynamic (true) or static (false) dependencies.
         leave out if you want to exclude neither (recommended!)
         */
        // exclude:
        //     'node_modules/react|src/tools|src/.+.story..+|src/.+.test..+|bootstrap.ts|polyfills.ts|@types|src/core/collectionFunctions/.d.ts',

        exclude: 'node_modules|test.*s*|story.*s*|d.ts',
        /* pattern specifying which files to include (regular expression)
         dependency-cruiser will skip everything not matching this pattern
         */
        includeOnly: 'src',
        /* list of module systems to cruise */
        // moduleSystems: ['amd', 'cjs', 'es6', 'tsd'],

        /* prefix for links in html and svg output (e.g. https://github.com/you/yourrepo/blob/develop/) */
        // prefix: '',

        /* false (the default): ignore dependencies that only exist before typescript-to-javascript compilation
         true: also detect dependencies that only exist before typescript-to-javascript compilation
         "specify": for each dependency identify whether it only exists before compilation or also after
         */
        tsPreCompilationDeps: false,

        /* if true combines the package.jsons found from the module up to the base
         folder the cruise is initiated from. Useful for how (some) mono-repos
         manage dependencies & dependency definitions.
         */
        // combinedDependencies: false,

        /* if true leave symlinks untouched, otherwise use the realpath */
        // preserveSymlinks: false,

        /* Typescript project file ('tsconfig.json') to use for
         (1) compilation and
         (2) resolution (e.g. with the paths property)

         The (optional) fileName attribute specifies which file to take (relative to
         dependency-cruiser's current working directory). When not provided
         defaults to './tsconfig.json'.
         */
        tsConfig: {
            fileName: './tsconfig.json',
        },

        /* Webpack configuration to use to get resolve options from.

         The (optional) fileName attribute specifies which file to take (relative
         to dependency-cruiser's current working directory. When not provided defaults
         to './webpack.conf.js'.

         The (optional) `env` and `args` attributes contain the parameters to be passed if
         your webpack config is a function and takes them (see webpack documentation
         for details)
         */
        // webpackConfig: {
        //  fileName: './webpack.config.js',
        //  env: {},
        //  args: {},
        // },

        /* How to resolve external modules - use "yarn-pnp" if you're using yarn's Plug'n'Play.
         otherwise leave it out (or set to the default, which is 'node_modules')
         */
        // externalModuleResolutionStrategy: 'node_modules',
        /* List of strings you have in use in addition to cjs/ es6 requires
         & imports to declare module dependencies. Use this e.g. if you've
         redeclared require, use a require-wrapper or use window.require as
         a hack.
         */
        // exoticRequireStrings: [],
        reporterOptions: {
            dot: {
                /* pattern of modules that can be consolidated in the detailed
                 graphical dependency graph. The default pattern in this configuration
                 collapses everything in node_modules to one folder deep so you see
                 the external modules, but not the innards your app depends upon.
                 */
                /* Options to tweak the appearance of your graph.See
                 https://github.com/sverweij/dependency-cruiser/blob/master/doc/rules-reference.md#dot
                 for details and some examples. If you don't specify a theme
                 don't worry - dependency-cruiser will fall back to the default one.
                 */
                theme: {
                    replace: false,
                    graph: {
                        /* use splines: 'ortho' for straight lines. Be aware though
                         graphviz might take a long time calculating ortho(gonal)
                         routings.
                         */
                        splines: 'ortho',
                        rankdir: 'TB',
                        ordering: 'in',
                        overlap: 'false',
                        nodesep: '1.36',
                        ranksep: '1.68',
                        fontname: 'Helvetica-bold',
                        fontsize: '9',
                        style: 'rounded,bold,filled',
                        fillcolor: '#ffffff',
                        compound: 'true',
                    },
                    modules: [
                    ],
                },
            },
            archi: {
                /* pattern of modules that can be consolidated in the high level
                 graphical dependency graph. If you use the high level graphical
                 dependency graph reporter (`archi`) you probably want to tweak
                 this collapsePattern to your situation.
                 */
                // collapsePattern: '^(library|core|modules|tools|assets)/[^/]+',
                collapsePattern: '^(src/[^/]+|bin)',

                /* Options to tweak the appearance of your graph.See
                 https://github.com/sverweij/dependency-cruiser/blob/master/doc/rules-reference.md#dot
                 for details and some examples. If you don't specify a theme
                 for 'archi' dependency-cruiser will use the one specified in the
                 dot section (see above), if any, and otherwise use the default one.
                 */
                // theme: {
                // },
            },
        },
    },
};
// generated: dependency-cruiser@8.0.0 on 2020-03-01T14:01:31.045Z
