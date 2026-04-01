/**
 * The translations for the article table.
 */
var articleTableLang = {
    de: {
        label: {
            articleNumber: 'Art.-Nr.',
            toggleButtonFilter: 'Filter'
        }
    },
    en: {
        label: {
            articleNumber: 'Item-No',
            toggleButtonFilter: 'Filter'
        }
    },
    fr: {
        label: {
            articleNumber: 'NÂ° article',
            toggleButtonFilter: 'Filter'
        }
    }
}

/**
 * The internationalization plugin for the article table.
 */
var articleTableI18n = new VueI18n({
    locale: document.documentElement.lang, // set locale
    fallbackLocale: 'en',
    messages: articleTableLang // set locale messages
});

/**
 * The vuex application state for the article table.
 *
 * @prop {object} ..... state .................................................. the stores root state
 * @prop {string} ..... state.apiUrl ........................................... the url of the REST API
 * @prop {object[]} ... state.watchlistArticles[] .............................. the articles in the watchlist
 * @prop {string} ..... state.watchlistArticles[].url .......................... the articles url
 * @prop {number} ..... state.watchlistArticles[].count ........................ the articles count
 * @prop {object[]} ... state.columns .......................................... the tables columns, except article number (root property)
 * @prop {string} ..... state.columns[].short .................................. the columns abbreviated label
 * @prop {string} ..... state.columns[].unit ................................... the columns unit
 * @prop {object[]} ... state.columns[].options ................................ the columns unique options
 * @prop {string} ..... state.columns[].options.value .......................... the unique option's value
 * @prop {boolean} .... state.columns[].options.disabled ....................... the unique option's disabled state
 * @prop {object[]} ... state.articles ......................................... the tables articles, except article number (root property)
 * @prop {string} ..... state.articles[].articleNumberFormatted ................ the article number
 * @prop {object[]} ... state.articles[].attributes ............................ the article attributes
 * @prop {string} ..... state.articles[].attributes[].short .................... the attributes abbreviated label
 * @prop {string} ..... state.articles[],attributes[].unit ..................... the attributes unit
 * @prop {string} ..... state.articles[].attributes[].value .................... the attributes value
 * @prop {string} ..... state.articles[].href .................................. the article url
 * @prop {boolean} .... state.articles[].visible ............................... whether an article is visible
 * @prop {boolean} .... state.filter ........................................... the tables filter
 * @prop {boolean} .... state.filter.attributes ................................ the currenlty filtered attributes
 *
 * @see https://vuex.vuejs.org/en/
 * @see webapp/typo3conf/ext/rl_hummel_pim/README.md
 */
var articleTableState = {

    /**
     * This single object contains all your application level state and serves
     * as the "single source of truth".
     *
     * @see https://vuex.vuejs.org/en/state.html
     */
    state: {
        apiUrl: '',
        showImages: false,
        watchlistArticles: [],
        columns: [],
        articles: [],
        filter: {
            attributes: [],
            count: 0
        }
    },

    /**
     * Getters return derived store state.
     *
     * @see https://vuex.vuejs.org/en/getters.html
     */
    getters: {

        /**
         * Gets all attributes of a particular column.
         *
         * @param {object} state - the store state
         * @param {number} index - the index of the column
         * @return {string[]} attributes
         */
        attributesForColumn: function (state) {
            return function (index) {
                var attributes = [];

                for (var i = 0, articlesCount = state.articles.length; i < articlesCount; i++) {
                    attributes.push(state.articles[i].attributes[index].value);
                }

                return attributes;
            }
        },

        /**
         * Gets all attributes of a particular column for the currently visible
         * articles.
         *
         * @param {object} state - the store state
         * @param {number} index - the index of the column
         * @return {string[]} attributes
         */
        attributesForColumnOfVisibleArticles: function (state) {
            return function (index) {
                var attributes = [];

                for (var i = 0, articlesCount = state.articles.length; i < articlesCount; i++) {
                    if (state.articles[i].visible === true) {
                        attributes.push(state.articles[i].attributes[index].value);
                    }
                }

                return attributes;
            }
        },

        /**
         * Gets all unique attributes of a particular column.
         *
         * @param {object} state - the store state
         * @param {object} getters - the stores getter methods
         * @param {number} index - the index of the column
         * @return {string[]} attributes
         */
        uniqueAttributesForColumn: function (state, getters) {
            return function (index) {
                return getters.attributesForColumn(index).filter(function (value, index, self) {
                    return self.indexOf(value) === index;
                });
            }
        },

        /**
         * Gets all unique attributes of a particular column for the currently
         * visible articles.
         *
         * @param {object} state - the store state
         * @param {object} getters - the stores getter methods
         * @param {number} index - the index of the column
         * @return {string[]} attributes
         */
        uniqueAttributesForColumnOfVisibleArticles: function (state, getters) {
            return function (index) {
                return getters.attributesForColumnOfVisibleArticles(index).filter(function (value, index, self) {
                    return self.indexOf(value) === index;
                });
            }
        },

        /**
         * Gets all unique attributes of a particular column that are sorted
         * using 'natural sort'.
         *
         * @param {object} state - the store state
         * @param {object} getters - the stores getter methods
         * @param {number} index - the index of the column
         * @return {string[]} attributes
         * @see https://stackoverflow.com/questions/15478954/sort-array-elements-string-with-numbers-natural-sort
         */
        uniqueAndSortedAttributesForColumn: function (state, getters) {
            return function (index) {
                return getters.uniqueAttributesForColumn(index).sort(function (a, b) {
                    var ax = [],
                        bx = [];

                    a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
                        ax.push([$1 || Infinity, $2 || ""])
                    });

                    b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
                        bx.push([$1 || Infinity, $2 || ""])
                    });

                    while (ax.length && bx.length) {
                        var an = ax.shift();
                        var bn = bx.shift();
                        var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
                        if (nn) return nn;
                    }

                    return ax.length - bx.length;
                });
            }
        }
    },

    /**
     * The only way to actually change state in a Vuex store is by committing a
     * mutation.
     *
     * @see https://vuex.vuejs.org/en/mutations.html
     */
    mutations: {

        /**
         * Sets the url to the rest api endpoint.
         *
         * @param {string} payload.url - the url
         */
        SET_API_URL: function (state, payload) {
            state.apiUrl = payload.url;
        },

        /**
         * Set this property if images should be rendered.
         *
         * @param {boolean} payload.value
         */
        SET_SHOW_IMAGES: function (state, payload) {
            state.showImages = payload.value;
        },

        /**
         * Adds an article's API endpoint
         *
         * @param {object} state - the store state
         * @param {string} payload.url - the article's API endpoint
         */
        ADD_WATCHLIST_ARTICLE: function (state, payload) {
            state.watchlistArticles.push(payload);
            state.watchlistArticles.splice(state.watchlistArticles.length);
        },

        /**
         * Removes an article's API endpoint
         *
         * @param {object} state - the store state
         * @param {string} payload.url - the article's API endpoint
         */
        REMOVE_WATCHLIST_ARTICLE: function (state, payload) {
            for (var i = 0; i < state.watchlistArticles.length; i++) {
                if (state.watchlistArticles[i].url == payload.url) {
                    state.watchlistArticles.splice(i, 1);
                    break;
                }
            }
        },

        /**
         * Set an articles watchlist status
         *
         * @param {object} state - the store state
         * @param {string} payload - the article's API endpoint
         */
        SET_ARTICLE_WATCHLIST_STATUS: function (state, payload) {
            for (var i = 0; i < state.articles.length; i++) {
                if (state.articles[i].apiUrl == payload.url) {
                    state.articles[i].watchlisted = !state.articles[i].watchlisted;
                }
            }
        },

        /**
         * Adds all columns to the article table.
         *
         * @param {object} state - the store state
         * @param {object} payload - the columns
         */
        ADD_COLUMNS: function (state, payload) {
            state.columns = payload;
            state.columns.splice(state.columns.length);
        },

        /**
         * Adds all filter attributes with an initial value of an empty array. The size of
         * the array holding the filter attributes is the amount of columns
         * available. Note that the columns do not include the article number
         * column which can not be filtered.
         *
         * @param {object} state - the store state
         */
        ADD_FILTER_ATTRIBUTES: function (state) {
            for (var i = 0, columnsLength = state.columns.length; i < columnsLength; i++) {
                state.filter.attributes.push([]);
            }
        },

        /**
         * Adds all articles to the article table.
         *
         * @param {object} state - the store state
         * @param {object} payload - the articles
         */
        ADD_ARTICLES: function (state, payload) {
            state.articles = payload;
            state.articles.splice(state.articles.length);
        },

        /**
         * Sets the state of an articles to visible.
         *
         * @param {object} state - the store state
         * @param {number[]} payload.indices - the indices of articles that should be visible
         */
        SHOW_ARTICLES: function (state, payload) {
            var indices = payload.indices;
            var index;

            for (var i = 0, indicesCount = indices.length; i < indicesCount; i++) {
                index = indices[i];
                state.articles[index].visible = true;
            }
        },

        /**
         * Sets the state of an articles to hidden.
         *
         * @param {object} state - the store state
         * @param {number[]} payload.indices - the indices of articles that should be hidden
         */
        HIDE_ARTICLES: function (state, payload) {
            var indices = payload.indices;
            var index;

            for (var i = 0, indicesCount = indices.length; i < indicesCount; i++) {
                index = indices[i];
                state.articles[index].visible = false;
            }
        },

        /**
         * Resets the state of all articles to visible.
         *
         * @param {object} state - the store state
         */
        RESET_ARTICLES: function (state) {
            for (var i = 0, articlesCount = state.articles.length; i < articlesCount; i++) {
                state.articles[i].visible = true;
            }
        },

        /**
         * Adds an article attribute to the filtered list.
         *
         * @param {object} state - the store state
         * @param {string} payload.value - the value of the articles attribute
         * @param {number} payload.columnIndex - the index of the column
         */
        ADD_FILTERED_ATTRIBUTE: function (state, payload) {
            // If this value is not already in the array, add it
            if (state.filter.attributes[payload.columnIndex].indexOf(payload.value) === -1) {
                state.filter.attributes[payload.columnIndex].push(payload.value);
                state.filter.count++;
            }
        },

        /**
         * Removes an article attribute from the filtered list.
         *
         * @param {object} state - the store state
         * @param {string} payload.value - the value of the articles attribute to remove
         * @param {number} payload.columnIndex - the index of the column
         */
        REMOVE_FILTERED_ATTRIBUTE: function (state, payload) {
            var index = state.filter.attributes[payload.columnIndex].indexOf(payload.value);
            if (index !== -1) {
                state.filter.attributes[payload.columnIndex].splice(index, 1);
                state.filter.count--;
            }
        },

        /**
         * Removes all article attributes from the filtered list.
         *
         * @param {object} state - the store state
         */
        REMOVE_ALL_FILTERED_ATTRIBUTES: function (state) {
            for (var i = 0; i < state.filter.attributes.length; i++) {
                state.filter.attributes[i] = [];
            }
            state.filter.count = 0;
        },

        /**
         * Sets the state of a filter option to disabled.
         *
         * @param {object} state - the store state
         * @param {Object[]} payload.indices - the indices
         * @param {number} payload.indices[].columnIndex - the index of the column
         * @param {number} payload.indices[].optionIndex . the index of the filter option
         */
        DISABLE_FILTER_OPTIONS: function (state, payload) {
            for (var i = 0, indicesCount = payload.indices.length; i < indicesCount; i++) {
                /*state.columns[payload.indices[i].columnIndex].options[payload.indices[i].optionIndex].disabled = true;*/
            }
        },

        /**
         * Sets the state of a filter option to enabled.
         *
         * @param {object} state - the store state
         * @param {Object[]} payload.indices - the indices
         * @param {number} payload.indices[].columnIndex - the index of the column
         * @param {number} payload.indices[].optionIndex . the index of the filter option
         */
        ENABLE_FILTER_OPTIONS: function (state, payload) {
            for (var i = 0, indicesCount = payload.indices.length; i < indicesCount; i++) {
                /*state.columns[payload.indices[i].columnIndex].options[payload.indices[i].optionIndex].disabled = false;*/
            }
        }
    },

    /**
     * Actions are similar to mutations, but instead of mutating the state, they
     * commit mutations. Actions can contain arbitrary asynchronous operations.
     *
     * @see https://vuex.vuejs.org/en/actions.html
     */
    actions: {

        /**
         * Loads the data and adds it to the store.
         *
         * @param {object} context - the stores context
         * @return {Promise} data or no data
         */
        requestData: function (context) {
            return new Promise(function (resolve, reject) {
                axios.get(context.state.apiUrl).then(function (response) {
                    var columns = response.data.columns.map(function (column) {
                        var options = [];
                        var values = context.getters.uniqueAndSortedAttributesForColumn(i);

                        for (var l = 0; l < values.length; l++) {
                            options.push({
                                value: values[l],
                                disabled: false
                            });
                        }

                        return {
                            description: column.description || '',
                            abbr: column.abbr || null,
                            short: column.short || null,
                            unit: column.unit || null,
                            title: column.description || column.short || '', // Title için description'ı öncelikli kullanıyoruz
                            options: options,
                            name: column.name,
                            value: column.value,
                            sorting: column.sorting,
                            prio: column.prio,
                            position: column.position,
                            type: column.type,
                            variationid: column.variationid,
                            hiddenInTable: column.hiddenInTable,
                            hiddenInFilteredResults: column.hiddenInFilteredResults
                        };
                    });

                    var articles = response.data.articles;
                    var tempArticles = [];
                    var tempColumns = [];
                    var showImages = response.data.showImages;

                    if (showImages) context.commit('SET_SHOW_IMAGES', { value: true });

                    // add articles
                    for (var j = 0, articlesCount = articles.length; j < articlesCount; j++) {
                        var article = articles[j];
                        var attributes = [];

                        // gather attributes
                        for (var k = 0, attributesCount = article.attributes.length; k < attributesCount; k++) {
                            var articleAttributes = article.attributes[k];

                            // missing attributes are null
                            if (articleAttributes !== null) {
                                attributes.push({
                                    short: articleAttributes.short,
                                    unit: articleAttributes.unit,
                                    value: articleAttributes.value,
                                    variationId: articleAttributes.variationId
                                });

                            } else {
                                attributes.push({
                                    short: '',
                                    unit: '',
                                    value: '-',
                                    variationId: ''
                                });
                            }
                        }
                        // set watchlist status
                        for (var i = 0; i < context.state.watchlistArticles.length; i++) {
                            var watchlistArticleApiUrl = context.state.watchlistArticles[i].url;
                            if (article.urls.api == watchlistArticleApiUrl) {
                                article.watchlisted = true;
                                break;
                            } else {
                                article.watchlisted = false;
                            }
                        }
                        tempArticles.push({
                            articleNumberFormatted: article.articleNumberFormatted,
                            articleNumber: article.articleNumber,
                            attributes: attributes,
                            href: article.urls.selfAbsolute,
                            visible: true,
                            apiUrl: article.urls.api,
                            watchlisted: article.watchlisted,
                            watchlistEnabled: article.watchlistEnabled,
                            segment: article.filter.segment,
                            title: article.title,
                            image: article.images.standardListing,
                            variationId: article.variationId
                        });
                    }

                    context.commit('ADD_ARTICLES', tempArticles);

                    // add columns
                    for (var i = 0, columnsLength = columns.length; i < columnsLength; i++) {
                        var column = columns[i];
                        var options = [];
                        var values = context.getters.uniqueAndSortedAttributesForColumn(i);

                        for (var l = 0; l < values.length; l++) {
                            options.push({
                                value: values[l],
                                disabled: false
                            });
                        }

                        tempColumns.push({
                            abbr: column.abbr ? column.abbr : null,
                            short: column.short ? column.short : null,
                            unit: column.unit ? column.unit : null,
                            title: column.title ? column.title : null,
                            options: options

                        });
                    }

                    context.commit('ADD_COLUMNS', tempColumns);
                    context.commit('ADD_FILTER_ATTRIBUTES');

                    resolve();
                }).catch(function (error) {
                    console.error(error);
                    reject();
                });
            });
        },

        /**
         * Filters all articles against the attributes in the filtered list.
         *
         * An article should be visible if for each filtered column, it matches
         * at least one of the selected values for that column.
         *
         * @param {object} context - the stores context
         */
        filterArticles: function (context) {
            var articles = context.state.articles;
            var article;
            var filteredAttributes = context.state.filter.attributes;
            var activeFilterColumns = [];
            var matchingArticlesIndices = [];
            var nonMatchingArticlesIndices = [];

            // Determine which columns have active filters
            for (var i = 0; i < filteredAttributes.length; i++) {
                if (filteredAttributes[i].length > 0) {
                    activeFilterColumns.push(i);
                }
            }

            // If no filters are active, show all articles
            if (activeFilterColumns.length === 0) {
                for (var i = 0; i < articles.length; i++) {
                    matchingArticlesIndices.push(i);
                }
            } else {
                // For each article
                nextArticle: for (var i = 0, articlesCount = articles.length; i < articlesCount; i++) {
                    article = articles[i];

                    // Check each column that has active filters
                    for (var j = 0; j < activeFilterColumns.length; j++) {
                        var columnIndex = activeFilterColumns[j];
                        var columnValue = article.attributes[columnIndex].value;
                        var columnFilters = filteredAttributes[columnIndex];
                        var matchesThisColumn = false;

                        // Check if the article matches any of the selected values for this column
                        for (var k = 0; k < columnFilters.length; k++) {
                            if (columnValue === columnFilters[k]) {
                                matchesThisColumn = true;
                                break;
                            }
                        }

                        // If article doesn't match any value in this column, exclude it
                        if (!matchesThisColumn) {
                            nonMatchingArticlesIndices.push(i);
                            continue nextArticle;
                        }
                    }

                    // If we get here, the article matched at least one value in each filtered column
                    matchingArticlesIndices.push(i);
                }
            }

            context.commit('SHOW_ARTICLES', {
                indices: matchingArticlesIndices
            });

            context.commit('HIDE_ARTICLES', {
                indices: nonMatchingArticlesIndices
            });
        },

        /**
         * Disables or enables all filter options according to the attributes
         * of the currently visible articles.
         *
         * @param {object} context - the stores context
         */
        updateFilterAttributes: function (context) {
            var column;
            var filterOptions;
            var filterOption;
            var uniqueAttributes;
            var uniqueAttribute;
            var disabledFilterOptionIndices = [];
            var enabledFilterOptionIndices = [];

            for (var i = 0, columnsCount = context.state.columns.length; i < columnsCount; i++) {
                column = context.state.columns[i];
                uniqueAttributes = context.getters.uniqueAttributesForColumnOfVisibleArticles(i);
                filterOptions = column.options;

                for (var j = 0, optionsCount = filterOptions.length; j < optionsCount; j++) {
                    filterOption = filterOptions[j];

                    disabledFilterOptionIndices.push({
                        columnIndex: i,
                        optionIndex: j
                    });

                    for (var k = 0, attributesCount = uniqueAttributes.length; k < attributesCount; k++) {
                        uniqueAttribute = uniqueAttributes[k];

                        if (filterOption.value === uniqueAttribute) {
                            enabledFilterOptionIndices.push({
                                columnIndex: i,
                                optionIndex: j
                            });
                        }
                    }
                }
            }

            context.commit('DISABLE_FILTER_OPTIONS', {
                indices: disabledFilterOptionIndices
            });

            context.commit('ENABLE_FILTER_OPTIONS', {
                indices: enabledFilterOptionIndices
            });
        },

        /**
         * Adds an item to watchlist.
         *
         * @param {object} context - the stores context
         * @param {number} url - the apiUrl from the article to add
         */
        addItemToWatchlist: function (context, url) {
            context.commit('SET_ARTICLE_WATCHLIST_STATUS', { url: url });
            console.log("Test Add");
            headerWatchlist.addWatchlistMessage();
            Theme.WatchlistService.getProductData(url, function (data) {
                articleTableStore.commit('ADD_WATCHLIST_ARTICLE', data);
                productWatchlistLocalStorage.setLocalStorage(LOCAL_STORAGE_NAME, context.state.watchlistArticles);
                headerWatchlist.updateWatchlistCounter();
            });
        },

        /**
         * Removes an item from watchlist.
         *
         * @param {object} context - the stores context
         * @param {number} url - the apiUrl from the article to remove
         */
        removeItemFromWatchlist: function (context, url) {
            context.commit('SET_ARTICLE_WATCHLIST_STATUS', { url: url });
            context.commit('REMOVE_WATCHLIST_ARTICLE', { url: url });
        }
    }
};

/**
 * The vuex store instance for the article table.
 *
 * @type {Vuex.Store}
 * @requires vuex
 */
var articleTableStore = new Vuex.Store(articleTableState);

/**
 * The view model for the article table.
 *
 * @prop {string} ..... el ..................................................... the id of the dom element that is used as the template
 * @prop {object} ..... articleTableStore ...................................... this will inject the store instance to all child components
 * @prop {object} ..... data ................................................... the data of the vue instance
 * @prop {boolean} .... data.columns ........................................... the columns of the attibute table
 * @prop {boolean} .... data.articles .......................................... the articles of the attibute table
 * @prop {boolean} .... data.activeFilterDropdown .............................. the filter dropdown that is currently active
 *
 * @see https://vuejs.org/v2/guide/
 */
var articleTableVM = {
    el: '#spa-article-table',
    store: articleTableStore,
    i18n: articleTableI18n,
    data: {
        sharedState: articleTableStore.state,
        activeFilterDropdown: null
    },
    mounted: function () {
        var self = this;

        if (document.querySelector('.backdrop')) {
            document.querySelector('.backdrop').addEventListener('click', function (event) {
                event.currentTarget.classList.remove('is-active');
                self.hideFilterDropdown();
            });
        }

    },
    filters: {
        snakeCase: function (value) {
            if (!value) return '';
            value = value.toString();
            return value.toLowerCase().replace(/ /g, '_');
        }
    },
    methods: {

        // EVENT HANDLERS ......................................................

        /**
         * Gets called when a user clicks the filter label (which is only
         * visible on small viewports).
         *
         * @param {MouseEvent} event - the standard mouse event
         */
        onToggleFilterClick: function (event) {
            event.currentTarget.classList.toggle('is-open');
            event.currentTarget.nextElementSibling.querySelector('thead').classList.toggle('is-visible');
        },

        /**
         * Gets called when a user clicks the reset filter button (which is only
         * visible on small viewports).
         *
         * @param {MouseEvent} event - the standard mouse event
         */
        onResetFilterClick: function (event) {
            var checkedInputs;
            var selectedOptions;
            var filter;
            var checkedInput;

            this.$store.commit('REMOVE_ALL_FILTERED_ATTRIBUTES');
            this.filterRows();

            for (var i = 0, filtersCount = this.$refs.filter.length; i < filtersCount; i++) {
                filter = this.$refs.filter[i];
                checkedInputs = filter.querySelectorAll('input.checked');
                selectedOptions = filter.classList.remove('selected');

                for (var j = 0; j < checkedInputs.length; j++) {
                    checkedInput = checkedInputs[j];
                    checkedInput.checked = false;
                    checkedInput.classList.remove('checked');
                }
            }
        },

        /**
         * Gets called when a user clicks a row.
         *
         * @todo implement comparison functionality
         * @todo implement 3d functionality
         * @param {string} href - the article url
         * @param {MouseEvent} event - the standard mouse event
         */
        onRowClick: function (href, event) {
            if (!event.target.classList.contains('button-wishlist') &&
                !event.target.classList.contains('button-compare')) {
                window.location.href = href;
            }
        },


        /**
         * Gets called when a user clicks a watchlist icon.
         *
         * @param {number} article - the item
         */
        onButtonWatchlistClick: function (article) {

            if (article.watchlisted) {
                this.$store.dispatch('removeItemFromWatchlist', article.apiUrl);
                productWatchlistLocalStorage.setLocalStorage(LOCAL_STORAGE_NAME, this.$store.state.watchlistArticles);
                headerWatchlist.updateWatchlistCounter();
                headerWatchlist.removeWatchlistMessage();
            } else {
                this.$store.dispatch('addItemToWatchlist', article.apiUrl);
            }
        },

        /**
         * Gets called when a user clicks a column label.
         *
         * @param {number} index - the columns index
         */
        onColumnLabelClick: function (index) {
            var filter = this.$refs.filter[index];

            if (this.activeFilterDropdown === null) {
                this.showFilterDropdown(filter);
                document.body.classList.add('article-table-filter-active');
            } else if (this.activeFilterDropdown === filter) {
                this.hideFilterDropdown();
                document.body.classList.remove('article-table-filter-active');
            } else {
                this.switchFilterDropdown(filter);
            }
        },

        /**
         * Gets called when the user changes the value of a filter attribute.
         *
         * @param {number} index - the columns index
         * @param {Event} event - the standard change event
         */
        onFilterAttributeChange: function (index, event) {
            var checkbox = event.target;
            var filter = this.$refs.filter[index];

            if (checkbox.classList.contains('checked')) {
                checkbox.classList.remove('checked');
                this.$store.commit('REMOVE_FILTERED_ATTRIBUTE', {
                    value: checkbox.value,
                    columnIndex: index
                });
            } else {
                checkbox.classList.add('checked');
                this.$store.commit('ADD_FILTERED_ATTRIBUTE', {
                    value: checkbox.value,
                    columnIndex: index
                });
            }

            this.hideFilterDropdown();
            this.setFilterDropdownState(filter);
            this.filterRows();
        },

        // TEMPLATE HELPERS ....................................................

        /**
         * Generates a abbreviation.
         *
         * @param {object} column - the tables column
         * @param {string} column.abbr - the columns abbreviation
         * @param {string} column.short - the columns abbreviated label
         * @param {string} column.unit - the columns unit
         */
        getAbbreviation: function (column) {
            var abbr = column.abbr ? column.abbr : '';
            var label = column.short ? column.short : '';
            var unit = column.unit ? ' (' + column.unit + ') ' : ' ';
            return abbr === '' ? label + unit : abbr + unit;
        },

        /**
         * Generates a label.
         *
         * @param {object} column - the tables column
         * @param {string} column.abbr - the columns abbreviation
         * @param {string} column.short - the columns abbreviated label
         * @param {string} column.unit - the columns unit
         */
        getLabel: function (column) {
            var label = column.short ? column.short : '';
            var unit = column.unit ? ' (' + column.unit + ') ' : ' ';
            return label + unit;
        },
        getTitle: function (column) {
            var label = column.title ? column.title : '';
            var unit = column.unit ? ' (' + column.unit + ') ' : ' ';
            return label + unit;
        },

        // UTILITY FUNCTIONS ...................................................

        /**
         * Hides the currently active filter dropdown.
         */
        hideFilterDropdown: function () {
            this.activeFilterDropdown.classList.remove('active');
            this.activeFilterDropdown = null;
            this.$refs.tableWrapper.style.minHeight = '';
            if (document.querySelector('.backdrop')) {
                document.querySelector('.backdrop').classList.remove('is-active');
            }
        },

        /**
         * Shows the filter dropdown of a column.
         *
         * @param {object} filter - the columns filter dropdown
         */
        showFilterDropdown: function (filter) {
            this.activeFilterDropdown = filter;
            this.activeFilterDropdown.classList.add('active');
            this.$refs.tableWrapper.style.minHeight = this.activeFilterDropdown.querySelector('.table-filter__select__options').offsetHeight + 20 + 'px';
            if (document.querySelector('.backdrop')) {
                document.querySelector('.backdrop').classList.add('is-active');
            }
        },

        /**
         * Hides the currently active filter dropdown and shows the filter
         * dropdown of another column.
         *
         * @param {object} filter - the columns filter dropdown
         */
        switchFilterDropdown: function (filter) {
            this.activeFilterDropdown.classList.remove('active');
            this.activeFilterDropdown = filter;
            this.activeFilterDropdown.classList.add('active');
            this.$refs.tableWrapper.style.minHeight = this.activeFilterDropdown.querySelector('.table-filter__select__options').offsetHeight + 20 + 'px';
            if (document.querySelector('.backdrop')) {
                document.querySelector('.backdrop').classList.add('is-active');
            }
        },

        /**
         * Updates the selected state of the filter dropdown.
         *
         * @param {object} filter - the columns filter dropdown
         */
        setFilterDropdownState: function (filter) {
            if (filter.querySelectorAll('input.checked').length) {
                filter.classList.add('selected');
            } else {
                filter.classList.remove('selected');
            }
        },

        /**
         * Updates the articles and filter attributes in the store.
         */
        filterRows: function () {
            if (this.$store.state.filter.attributes.length > 0) {
                this.$store.dispatch('filterArticles');
            } else if (this.$store.state.filter.attributes.length <= 0) {
                this.$store.commit('RESET_ARTICLES');
            }

            this.$store.dispatch('updateFilterAttributes');
        }
    }
};


/**
 * The localStorage functionality for the product watchlist.
 */
var productWatchlistLocalStorage = {

    /**
     * Updates the localStorage entry
     *
     * @param {String} lsName - key of the localStorage entry
     * @param {String} lsvalue - value of the localStorage entry
     */
    setLocalStorage: function (lsName, lsValue) {
        localStore.setLocalStorage(lsName, lsValue);
    },

    /**
     * Gets the localStorage value
     *
     * @param {String} lsName - key of the localStorage entry
     * @return {Array} apiUrls - API Urls
     */
    getLocalStorage: function (lsName) {
        return localStore.getLocalStorage(lsName);
    }

};


/**
 * When the dom content finished loading, we want to load the data and
 * instantiate the article table.
 */
document.addEventListener('DOMContentLoaded', function () {

    // show loader
    document.querySelector('.product-article-table__loader').style.display = 'block';

    // get the filter parameters
    var filterParameters = window.location.search;

    // get and set the url for the data
    // var url = document.querySelector('[data-api-url]').getAttribute('data-api-url');
    var url = document.querySelector('[data-api-url]').getAttribute('data-api-url');
    articleTableStore.commit('SET_API_URL', { url: url });

    // Get watchlist article API urls from localStorage
    var watchlistArticles = productWatchlistLocalStorage.getLocalStorage(LOCAL_STORAGE_NAME);


    if (watchlistArticles.length > 0) {
        //  Add watchlist article API urls
        for (var i = 0; i < watchlistArticles.length; i++) {
            articleTableStore.commit('ADD_WATCHLIST_ARTICLE', watchlistArticles[i]);
        }
    }

    // load the data
    articleTableStore.dispatch('requestData').then(function () {

        // init the single page application
        var vueApp = new Vue(articleTableVM);

        // Global olarak erişim için kaydet
        window.ARTICLE_TABLE_APP = vueApp;

        // hide loader
        document.querySelector('.product-article-table__loader').style.display = 'none';
    }, function () {

        // show error notification
        document.querySelector('.product-article-table__notification').style.display = 'block';

        // hide loader
        document.querySelector('.product-article-table__loader').style.display = 'none';
    });
});

function formatColumns(columns) {
    return columns.map(column => {
        return {
            description: column.description,
            name: column.name,
            value: column.value,
            unit: column.unit,
            abbr: column.abbr,
            sorting: column.sorting,
            prio: column.prio,
            position: column.position,
            short: column.short,
            type: column.type,
            variationid: column.variationid,
            hiddenInTable: column.hiddenInTable,
            hiddenInFilteredResults: column.hiddenInFilteredResults
        };
    });
}

// Bu satırı kaldırıyoruz veya koşullu hale getiriyoruz
// const formattedColumns = formatColumns(data.columns);
// Eğer data tanımlanmışsa çalıştır
if (typeof data !== 'undefined' && data && data.columns) {
    const formattedColumns = formatColumns(data.columns);
}