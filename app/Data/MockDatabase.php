<?php

namespace App\Data;

class MockDatabase
{
    public static function conferences(): array
    {
        return [
            [
                'id' => 1,
                'title' => 'Laravel Conference 2026',
                'description' => 'An in-depth look at the latest Laravel features and ecosystem.',
                'lecturers' => 'Taylor Otwell, Nuno Maduro',
                'date' => '2026-04-10',
                'time' => '10:00',
                'address' => 'Vilnius, Gedimino pr. 1',
            ],
            [
                'id' => 2,
                'title' => 'React Summit 2026',
                'description' => 'Exploring the future of React and frontend development.',
                'lecturers' => 'Dan Abramov, Kent C. Dodds',
                'date' => '2026-05-20',
                'time' => '09:00',
                'address' => 'Kaunas, Laisvės al. 10',
            ],
            [
                'id' => 3,
                'title' => 'PHP Day 2025',
                'description' => 'A full day of PHP talks covering performance and best practices.',
                'lecturers' => 'Rasmus Lerdorf, Nikita Popov',
                'date' => '2025-11-01',
                'time' => '11:00',
                'address' => 'Klaipėda, Manto g. 5',
            ],
            [
                'id' => 4,
                'title' => 'Cloud & DevOps Summit 2026',
                'description' => 'Deep dive into cloud architecture, CI/CD pipelines, and container orchestration.',
                'lecturers' => 'Kelsey Hightower, Mitchell Hashimoto',
                'date' => '2026-06-14',
                'time' => '09:30',
                'address' => 'Vilnius, Konstitucijos pr. 12',
            ],
            [
                'id' => 5,
                'title' => 'Cybersecurity Forum 2026',
                'description' => 'Covering the latest threats, defense strategies, and ethical hacking insights.',
                'lecturers' => 'Bruce Schneier, Troy Hunt',
                'date' => '2026-07-03',
                'time' => '10:00',
                'address' => 'Kaunas, Nemuno g. 3',
            ],
            [
                'id' => 6,
                'title' => 'AI & Machine Learning Conference 2026',
                'description' => 'Exploring practical applications of AI, ML models, and neural networks.',
                'lecturers' => 'Andrew Ng, Andrej Karpathy',
                'date' => '2026-08-21',
                'time' => '11:00',
                'address' => 'Vilnius, Žalgirio g. 90',
            ],
            [
                'id' => 7,
                'title' => 'TypeScript & Node.js Day 2026',
                'description' => 'Everything about modern backend development with TypeScript and Node.',
                'lecturers' => 'Ryan Dahl, Anders Hejlsberg',
                'date' => '2026-09-09',
                'time' => '09:00',
                'address' => 'Šiauliai, Tilžės g. 149',
            ],
            [
                'id' => 8,
                'title' => 'UX/UI Design Conference 2026',
                'description' => 'Design thinking, accessibility, and building user-centered digital products.',
                'lecturers' => 'Don Norman, Aarron Walter',
                'date' => '2026-10-17',
                'time' => '10:30',
                'address' => 'Klaipėda, Taikos pr. 28',
            ],
            [
                'id' => 9,
                'title' => 'Open Source Summit 2025',
                'description' => 'Celebrating open source contributions and the future of community-driven software.',
                'lecturers' => 'Linus Torvalds, Nat Friedman',
                'date' => '2025-09-15',
                'time' => '10:00',
                'address' => 'Kaunas, Savanorių pr. 1',
            ],
            [
                'id' => 10,
                'title' => 'Mobile Development Forum 2025',
                'description' => 'Native and cross-platform mobile development best practices.',
                'lecturers' => 'Chris Lattner, Felix Krause',
                'date' => '2025-10-22',
                'time' => '09:00',
                'address' => 'Vilnius, Ukmergės g. 369',
            ],
            [
                'id' => 11,
                'title' => 'Database Engineering Summit 2025',
                'description' => 'Advanced techniques in relational and NoSQL database design and optimization.',
                'lecturers' => 'Michael Stonebraker, Martin Fowler',
                'date' => '2025-08-30',
                'time' => '11:00',
                'address' => 'Panevėžys, Respublikos g. 38',
            ],
            [
                'id' => 12,
                'title' => 'Vue.js & Nuxt Conference 2026',
                'description' => 'Mastering the Vue ecosystem, Nuxt frameworks, and composables.',
                'lecturers' => 'Evan You, Daniel Roe',
                'date' => '2026-11-05',
                'time' => '09:30',
                'address' => 'Vilnius, Gynėjų g. 4',
            ],
        ];
    }

    public static function users(): array
    {
        return [
            ['id' => 1, 'name' => 'Alice', 'surname' => 'Johnson', 'email' => 'alice@example.com'],
            ['id' => 2, 'name' => 'Bob', 'surname' => 'Smith', 'email' => 'bob@example.com'],
            ['id' => 3, 'name' => 'Carol', 'surname' => 'White', 'email' => 'carol@example.com'],
            ['id' => 4, 'name' => 'David', 'surname' => 'Brown', 'email' => 'david@example.com'],
            ['id' => 5, 'name' => 'Eva', 'surname' => 'Green', 'email' => 'eva@example.com'],
            ['id' => 6, 'name' => 'Frank', 'surname' => 'Miller', 'email' => 'frank@example.com'],
            ['id' => 7, 'name' => 'Grace', 'surname' => 'Wilson', 'email' => 'grace@example.com'],
            ['id' => 8, 'name' => 'Henry', 'surname' => 'Moore', 'email' => 'henry@example.com'],
            ['id' => 9, 'name' => 'Iris', 'surname' => 'Taylor', 'email' => 'iris@example.com'],
            ['id' => 10, 'name' => 'Jack', 'surname' => 'Anderson', 'email' => 'jack@example.com'],
            ['id' => 11, 'name' => 'Karen', 'surname' => 'Thomas', 'email' => 'karen@example.com'],
            ['id' => 12, 'name' => 'Leo', 'surname' => 'Jackson', 'email' => 'leo@example.com'],
            ['id' => 13, 'name' => 'Mia', 'surname' => 'Harris', 'email' => 'mia@example.com'],
            ['id' => 14, 'name' => 'Nathan', 'surname' => 'Martin', 'email' => 'nathan@example.com'],
            ['id' => 15, 'name' => 'Olivia', 'surname' => 'Garcia', 'email' => 'olivia@example.com'],
        ];
    }

    public static function registrations(): array
    {
        return [
            ['conference_id' => 1, 'user_id' => 1],
            ['conference_id' => 1, 'user_id' => 2],
            ['conference_id' => 1, 'user_id' => 5],
            ['conference_id' => 1, 'user_id' => 9],
            ['conference_id' => 2, 'user_id' => 3],
            ['conference_id' => 2, 'user_id' => 7],
            ['conference_id' => 2, 'user_id' => 11],
            ['conference_id' => 3, 'user_id' => 4],
            ['conference_id' => 3, 'user_id' => 6],
            ['conference_id' => 4, 'user_id' => 8],
            ['conference_id' => 4, 'user_id' => 10],
            ['conference_id' => 4, 'user_id' => 12],
            ['conference_id' => 5, 'user_id' => 13],
            ['conference_id' => 5, 'user_id' => 14],
            ['conference_id' => 6, 'user_id' => 1],
            ['conference_id' => 6, 'user_id' => 15],
            ['conference_id' => 7, 'user_id' => 2],
            ['conference_id' => 7, 'user_id' => 6],
            ['conference_id' => 8, 'user_id' => 3],
            ['conference_id' => 9, 'user_id' => 4],
            ['conference_id' => 9, 'user_id' => 5],
            ['conference_id' => 10, 'user_id' => 7],
            ['conference_id' => 10, 'user_id' => 8],
            ['conference_id' => 11, 'user_id' => 9],
            ['conference_id' => 12, 'user_id' => 10],
            ['conference_id' => 12, 'user_id' => 11],
            ['conference_id' => 12, 'user_id' => 13],
        ];
    }

    public static function findConference(int $id): ?array
    {
        foreach (self::conferences() as $conference) {
            if ($conference['id'] === $id) {
                return $conference;
            }
        }
        return null;
    }

    public static function findUser(int $id): ?array
    {
        foreach (self::users() as $user) {
            if ($user['id'] === $id) {
                return $user;
            }
        }
        return null;
    }

    public static function registeredClientsForConference(int $conferenceId): array
    {
        $userIds = array_column(
            array_filter(self::registrations(), fn($r) => $r['conference_id'] === $conferenceId),
            'user_id'
        );

        return array_values(array_filter(self::users(), fn($u) => in_array($u['id'], $userIds)));
    }
}
