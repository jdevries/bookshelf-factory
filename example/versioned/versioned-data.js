module.exports = {
        item: [
            { id: 1, name: "eggs"},
            { id: 2, name: "milk" },
            { id: 3, name: "cheese" },
            { id: 4, name: "diapers" },
            { id: 5, name: "oranges" },
            { id: 6, name: "apples" },
            { id: 7, name: "steak" },
            { id: 8, name: "chicken" },
            { id: 9, name: "potato chips" },
            { id: 10, name: "toothpaste" }
           
        ],
        list: [
            { id: 1, name: "shopping1", current_version: 2},
            { id: 2, name: "shopping2", current_version: 1}
        ],
        listversion: [
            { id: 5, parent_id: 1, published: 0, version: 0, category_id: 1},
            { id: 2, parent_id: 1, published: 1, version: 1, category_id: 1, valid_from: "2015-06-30T17:36:09.404", valid_to: "2015-07-30T17:36:08.404" },
            { id: 3, parent_id: 1, published: 1, version: 2, category_id: 1, valid_from: "2015-07-30T17:36:09.404", valid_to: "2115-07-30T17:36:09.404" },
            { id: 4, parent_id: 2, published: 1, version: 1, category_id: 2, valid_from: "2015-07-30T17:36:09.404", valid_to: "2115-07-30T17:36:09.404" }
        ],
        item_listversion: [
            { listversion_id: 2, item_id: 3 },
            { listversion_id: 2, item_id: 4 },
            { listversion_id: 2, item_id: 7 },
            { listversion_id: 2, item_id: 9 },
            { listversion_id: 3, item_id: 3 },
            { listversion_id: 3, item_id: 4 },
            { listversion_id: 3, item_id: 6 },
            { listversion_id: 4, item_id: 1 }
        ],
        user: [
            {id: 1, name: "John Doe", list_id: 1},
            {id: 2, name: "Jane Doe", list_id: 2},
            {id: 3, name: "Foreal Doe"}
        ],
        userversion: [
            {id: 1, parent_id: 1, published: 1, version: 1, list_id: 1, valid_from: "2015-07-30T17:36:09.404", valid_to: "2115-07-30T17:36:09.404" },
            {id: 2, parent_id: 2, published: 1, version: 1, list_id: 2, valid_from: "2015-07-30T17:36:09.404", valid_to: "2115-07-30T17:36:09.404" },
            {id: 3, parent_id: 1, published: 0, version: 0, list_id: 1},
            {id: 4, parent_id: 2, published: 0, version: 0, list_id: 2},
            {id: 5, parent_id: 3, published: 0, version: 0}
            

            
        ],
        category: [
            {id: 1, name: "Shopping"},
            {id: 2, name: "Christmas"}
        ],
        location: [
            {id: 1, name: 'Johns House', user_id: 1},
            {id: 2, name: 'Janes House', user_id: 2}
        ]
};