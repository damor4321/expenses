<?php
return [
    'Expenses\\V1\\Rest\\Expenses\\Controller' => [
        'description' => 'Create, manipulate, and retrieve expense annotations.',
        'collection' => [
            'description' => 'Manipulate lists of expense annotations.',
            'GET' => [
                'description' => 'Retrieve a paginated list of expense annotations.',
            ],
            'POST' => [
                'description' => 'Create a new expense annotations.',
            ],
        ],
        'entity' => [
            'description' => 'Manipulate and retrieve individual expense annotations.',
            'GET' => [
                'description' => 'Retrieve a expense annotations.',
            ],
            'PATCH' => [
                'description' => 'Update a expense annotations.',
            ],
            'PUT' => [
                'description' => 'Replace a expense annotations.',
            ],
            'DELETE' => [
                'description' => 'Delete a expense annotations.',
            ],
        ],
    ],
];
