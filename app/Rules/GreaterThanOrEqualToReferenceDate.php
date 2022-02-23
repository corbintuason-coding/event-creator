<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Carbon\Carbon;

class GreaterThanOrEqualToReferenceDate implements Rule
{
    public $referenceDate;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($referenceDate)
    {
        $this->referenceDate = $referenceDate;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return $value >= $this->referenceDate;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {

        return 'Date must be greater than or equal to ' . Carbon::parse($this->referenceDate)->toFormattedDateString().'!';
    }
}
