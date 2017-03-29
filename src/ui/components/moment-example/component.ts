import Component, { tracked } from "@glimmer/component";
import moment from 'moment';
// NOTE: moment docs for TypeScript https://momentjs.com/docs/#/use-it/typescript/
// suggest that you should use this syntax:

// import * as moment from 'moment';

// but that results in a build error:
// ember build
// ⠋ Building/src/ui/components/glimmer-moment-example/component.ts(2,25): Cannot find module 'moment'.
// cleaning up...
// Build failed.
// The Broccoli Plugin: [RollupWithDependencies] failed with:
// Error: Cannot call a namespace ('moment')

export default class GlimmerMomentExample extends Component {
    @tracked since = '';
    didInsertElement () {
        this.since = moment("20111031", "YYYYMMDD").fromNow();
    }
}
