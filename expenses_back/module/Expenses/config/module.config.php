<?php
return [
    'service_manager' => [
        'factories' => [
            \Expenses\V1\Rest\Expenses\ExpensesResource::class => \Expenses\V1\Rest\Expenses\ExpensesResourceFactory::class,
        ],
    ],
    'router' => [
        'routes' => [
            'expenses.rest.expenses' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/expenses[/:expenses_id]',
                    'defaults' => [
                        'controller' => 'Expenses\\V1\\Rest\\Expenses\\Controller',
                    ],
                ],
            ],
        ],
    ],
    'zf-versioning' => [
        'uri' => [
            0 => 'expenses.rest.expenses',
        ],
    ],
    'zf-rest' => [
        'Expenses\\V1\\Rest\\Expenses\\Controller' => [
            'listener' => \Expenses\V1\Rest\Expenses\ExpensesResource::class,
            'route_name' => 'expenses.rest.expenses',
            'route_identifier_name' => 'expenses_id',
            'collection_name' => 'expenses',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => 'ExpensesLib/Entity',
            'collection_class' => 'ExpensesLib/Collection',
            'service_name' => 'Expenses',
        ],
    ],
    'zf-content-negotiation' => [
        'controllers' => [
            'Expenses\\V1\\Rest\\Expenses\\Controller' => 'HalJson',
        ],
        'accept_whitelist' => [
            'Expenses\\V1\\Rest\\Expenses\\Controller' => [
                0 => 'application/vnd.expenses.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
        ],
        'content_type_whitelist' => [
            'Expenses\\V1\\Rest\\Expenses\\Controller' => [
                0 => 'application/vnd.expenses.v1+json',
                1 => 'application/json',
            ],
        ],
    ],
    'zf-hal' => [
        'metadata_map' => [
            \Expenses\V1\Rest\Expenses\ExpensesEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'expenses.rest.expenses',
                'route_identifier_name' => 'expenses_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \Expenses\V1\Rest\Expenses\ExpensesCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'expenses.rest.expenses',
                'route_identifier_name' => 'expenses_id',
                'is_collection' => true,
            ],
            'ExpensesLib/Entity' => [
                'entity_identifier_name' => 'id',
                'route_name' => 'expenses.rest.expenses',
                'route_identifier_name' => 'expenses_id',
                'hydrator' => \Zend\Hydrator\ObjectProperty::class,
            ],
            'ExpensesLib/Collection' => [
                'entity_identifier_name' => 'id',
                'route_name' => 'expenses.rest.expenses',
                'route_identifier_name' => 'expenses_id',
                'is_collection' => true,
            ],
        ],
    ],
    'zf-content-validation' => [
        'Expenses\\V1\\Rest\\Expenses\\Controller' => [
            'input_filter' => 'Expenses\\V1\\Rest\\Expenses\\Validator',
        ],
    ],
    'input_filter_specs' => [
        'Expenses\\V1\\Rest\\Expenses\\Validator' => [
            0 => [
                'required' => true,
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'max' => '255',
                        ],
                    ],
                ],
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                        'options' => [],
                    ],
                ],
                'name' => 'description',
                'description' => 'The expense annotation of no more than 255 characters.',
                'error_message' => 'A expense description must contain between 1 and 255 characters',
            ],
            1 => [
                'required' => true,
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'max' => '25',
                        ],
                    ],
                ],
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                        'options' => [],
                    ],
                ],
                'name' => 'date',
                'description' => 'The datetime of the expense.',
                'allow_empty' => false,
                'error_message' => 'The expense date must be a datetime correctly formatted',
            ],
            2 => [
                'required' => true,
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'max' => '512',
                        ],
                    ],
                ],
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                        'options' => [],
                    ],
                ],
                'name' => 'comment',
                'description' => 'An optional observation on the expense.',
                'allow_empty' => true,
                'error_message' => 'Comment lenght of no more than 512 characters.',
            ],
            3 => [
                'required' => true,
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\Digits::class,
                        'options' => [],
                    ],
                ],
                'filters' => [],
                'name' => 'amount',
                'description' => 'The amount of the expense in cents. Then an integer.',
                'error_message' => 'The amount of the expense must be in cents as an integer.',
            ],
            4 => [
                'required' => false,
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\Digits::class,
                        'options' => [],
                    ],
                ],
                'filters' => [],
                'name' => 'timestamp',
                'description' => 'The timestamp when the expense annotation was last modified.',
                'error_message' => 'You must provide a timestamp.',
            ],
        ],
    ],
    'zf-mvc-auth' => [
        'authorization' => [
            'Expenses\\V1\\Rest\\Expenses\\Controller' => [
                'collection' => [
                    'GET' => false,
                    'POST' => true,
                    'PUT' => false,
                    'PATCH' => false,
                    'DELETE' => false,
                ],
                'entity' => [
                    'GET' => false,
                    'POST' => false,
                    'PUT' => true,
                    'PATCH' => true,
                    'DELETE' => true,
                ],
            ],
        ],
    ],
];
