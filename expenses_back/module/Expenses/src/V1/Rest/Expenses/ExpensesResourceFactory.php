<?php
namespace Expenses\V1\Rest\Expenses;

use ExpensesLib\Mapper;

class ExpensesResourceFactory
{
    public function __invoke($services)
    {
        return new ExpensesResource($services->get(Mapper::class));
    }
}
