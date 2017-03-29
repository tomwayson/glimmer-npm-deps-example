import Component, { tracked } from "@glimmer/component";
import distanceInWords from "date-fns/distance_in_words";

export default class DateFnsExample extends Component {
    @tracked since = '';
    didInsertElement () {
        this.since = distanceInWords("20111031", new Date());
    }
};
