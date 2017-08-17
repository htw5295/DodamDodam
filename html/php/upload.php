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
# [START speech_quickstart]
# Includes the autoloader for libraries installed with composer
require __DIR__ . '/vendor/autoload.php';
# Imports the Google Cloud client library
use Google\Cloud\Speech\SpeechClient;

$url = $_POST['url'];

system("vim test.flac");
chmod('./test.flac', 0755);
file_put_contents('./test.flac', $url);

# Your Google Cloud Platform project ID
$projectId = 'DodamDodam';
# Instantiates a client
$speech = new SpeechClient([
    'projectId' => $projectId,
    'languageCode' => 'ko-KR',
]);
# The name of the audio file to transcribe
$fileName = './test.flac';
# The audio file's encoding and sample rate
$options = [
    'encoding' => 'FLAC',
    'sampleRateHertz' => 48000,
];
# Detects speech in the audio file
$results = $speech->recognize(fopen($fileName, 'w'), $options);
foreach ($results[0]->alternatives() as $alternative) {
    echo 'Transcription: ' . $alternative['transcript'] . PHP_EOL;
}
# [END speech_quickstart]
return $results;
?>
