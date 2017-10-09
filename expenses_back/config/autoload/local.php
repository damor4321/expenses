<?php
return [
    'expenseslib' => [
        'array_mapper_path' => 'data/expenseslib.php',
    ],
    'zf-mvc-auth' => [
        'authentication' => [
            'adapters' => [
                'expense' => [
                    'adapter' => \ZF\MvcAuth\Authentication\HttpAdapter::class,
                    'options' => [
                        'accept_schemes' => [
                            0 => 'basic',
                        ],
                        'realm' => 'api',
                        'htpasswd' => 'data/htpasswd',
                    ],
                ],
            ],
        ],
    ],
];
