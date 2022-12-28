<?php
// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Restrict access by user
 *
 * @package     availability_weekday
 * @copyright   2022 Stefan Hanauska <stefan.hanauska@altmuehlnet.de>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
namespace availability_weekday;

/**
 * Frontend class for availability per user
 */
class frontend extends \core_availability\frontend {
    /**
     * Gets a list of string identifiers (in the plugin's language file) that are required in JavaScript for this plugin.
     *
     * @return Array of required string identifiers
     */
    protected function get_javascript_strings() {
        return ['title', 'description'];
    }

    /**
     * Delivers parameters to the javascript part of the plugin
     *
     * @param  \stdClass $course Course object
     * @param  \cm_info $cm Course-module currently being edited (null if none)
     * @param  \section_info $section Section currently being edited (null if none)
     * @return array Array of parameters for the JavaScript function
     */
    protected function get_javascript_init_params($course, \cm_info $cm = null, \section_info $section = null) {
        global $OUTPUT;
        $calendar = \core_calendar\type_factory::get_calendar_instance();
        $weekdays = $calendar->get_weekdays();
        for ($i = 0; $i < 7; $i++) {
            $weekdays[$i]['index'] = $i;
        }
        $html = $OUTPUT->render_from_template('availability_weekday/days', ['days' => $weekdays]);
        return [$html];
    }
}
