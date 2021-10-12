<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class AlphaUnderscore implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return preg_match('/^[a-zA-Z0-9_]+$/', $value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return '‌Value must ‌contain‌ ‌only‌ ‌letters,‌ ‌numbers,‌ ‌and‌‌ underscores‌ ‌and‌ ‌no‌ ‌spaces.';
    }
}
