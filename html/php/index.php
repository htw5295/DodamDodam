<?php
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Install composer dependencies with "composer install"
// @see http://getcomposer.org for more information.
require __DIR__ . '/vendor/autoload.php';
$app = require __DIR__ . '/app.php';
// change this to your bucket name!
putenv("GOOGLE_BUCKET_NAME=dodamdodam_record");
putenv("GCLOUD_PROJECT=DodamDodam");
$app['bucket_name'] = getenv('GOOGLE_BUCKET_NAME') ?: 'your-bucket-name';
$app['project_id'] = getenv('GCLOUD_PROJECT');
$app['object_name'] = 'hello.txt';
if ($app['bucket_name'] == 'your-bucket-name') {
    die('Replace <code>&lt;your-bucket-name&gt;</code> with the name of your '
        . 'cloud storage bucket in <code>app.yaml</code> or set it as an '
        . 'environment variable for local development.');
}
// Run the app!
// use "gcloud app deploy" or run locally with dev_appserver.py
$app['debug'] = true;
$app->run();
