import React from "react";
import {Grid} from "semantic-ui-react";
import {Activity} from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActiviityDetails from "../details/ActiviityDetails";
import ActivityForm from "../form/ActivityForm";
import {useStore} from "../../../app/stores/store";
import {observer} from "mobx-react-lite";

interface Props {
    activities: Activity[];
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default observer(function ActivityDashboard({activities, deleteActivity, createOrEdit, submitting}: Props) {

    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}
                              deleteActivity={deleteActivity}
                              submitting={submitting}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActiviityDetails />}
                {editMode &&
                <ActivityForm
                    createOrEdit={createOrEdit}
                    submitting={submitting}
                />}
            </Grid.Column>
        </Grid>
    )
})