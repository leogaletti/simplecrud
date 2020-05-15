// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See simplecrud-tests.js for an example of importing.
import React from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

const SimpleCrud = (props) => {
    function screenCreate() {}
    function screenEdit() {}
    function screenList() {
        const meteorData = useTracker(() => {
            const list = props.collection.find({}).fetch();
            // Inside a reactive context, like a helper
            return {
                list,
            };
        });

        const fieldsNameShow = Object.values(props.fields);
        const fieldsNameDatabase = Object.keys(props.fields);

        console.log(meteorData.list);

        return (
            <table className={props.classTable ? props.classTable : ""}>
                <thead>
                    <tr>
                        {fieldsNameShow.map((name, index) => (
                            <th key={index}>{name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {meteorData.list.map((listItem, indexItem) => (
                        <tr index={indexItem}>
                            {fieldsNameDatabase.map((fieldName, indexField) => (
                                <td key={listItem[fieldName]}>
                                    {listItem[fieldName]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    return (
        <>
            {props.type === "list"
                ? screenList()
                : props.type === "create"
                ? screenCreate()
                : props.type === "edit"
                ? screenEdit()
                : screenList()}
        </>
    );
};

SimpleCrud.propTypes = {
    type: PropTypes.oneOf(["list", "create", "edit"]).isRequired,
    collection: PropTypes.any.isRequired,
    fields: PropTypes.object.isRequired,
    classTable: PropTypes.string,
};

SimpleCrud.defaultProps = {
    type: "list",
};

export { SimpleCrud };
