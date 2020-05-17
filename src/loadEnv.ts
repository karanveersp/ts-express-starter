/*
Gets the optional cli arg --env and
parses the corresponding env file.
*/
import dotenv from 'dotenv';
import commandLineArgs from 'command-line-args';

const options = commandLineArgs([
    {
        name: 'env',
        alias: 'e',
        defaultValue: 'production',
        type: String
    }
]);

// Set the env file
const result = dotenv.config({
    path: `./env/${options.env}.env`
});

if (result.error) {
    throw result.error;
}
