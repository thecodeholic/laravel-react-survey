<?php
/**
 * User: Zura
 * Date: 11/16/2022
 * Time: 10:06 PM
 */

namespace App\Enums;


/**
 * Class QuestionTypeEnum
 *
 * @author  Zura Sekhniashvili <zurasekhniashvili@gmail.com>
 * @package App\Enums
 */
enum QuestionTypeEnum: string
{
    case TYPE_TEXT = 'text';
    case TYPE_TEXTAREA = 'textarea';
    case TYPE_SELECT = 'select';
    case TYPE_RADIO = 'radio';
    case TYPE_CHECKBOX = 'checkbox';
}
