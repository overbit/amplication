import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SlateRecommendList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SlateRecommends"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Application Slate Guid"
          source="applicationSlateGuid"
        />
        <TextField label="First" source="first" />
        <TextField label="Id" source="id" />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField label="Prefix" source="prefix" />
        <TextField label="Reference1 Email" source="reference1Email" />
        <TextField label="Reference1 First" source="reference1First" />
        <TextField label="Reference1 Industry" source="reference1Industry" />
        <TextField label="Reference1 Last" source="reference1Last" />
        <TextField
          label="Reference1 Organization"
          source="reference1Organization"
        />
        <TextField label="Reference1 Phone" source="reference1Phone" />
        <TextField label="Reference1 Submitted" source="reference1Submitted" />
        <TextField label="Reference1 Title" source="reference1Title" />
        <TextField label="Reference1 Type" source="reference1Type" />
        <TextField
          label="Reference Num1 Isrms Recommender Score1"
          source="referenceNum1IsrmsRecommenderScore1"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score10"
          source="referenceNum1IsrmsRecommenderScore10"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score11"
          source="referenceNum1IsrmsRecommenderScore11"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score12"
          source="referenceNum1IsrmsRecommenderScore12"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score13"
          source="referenceNum1IsrmsRecommenderScore13"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score14"
          source="referenceNum1IsrmsRecommenderScore14"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score15"
          source="referenceNum1IsrmsRecommenderScore15"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score2"
          source="referenceNum1IsrmsRecommenderScore2"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score3"
          source="referenceNum1IsrmsRecommenderScore3"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score4"
          source="referenceNum1IsrmsRecommenderScore4"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score5"
          source="referenceNum1IsrmsRecommenderScore5"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score6"
          source="referenceNum1IsrmsRecommenderScore6"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score7"
          source="referenceNum1IsrmsRecommenderScore7"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score8"
          source="referenceNum1IsrmsRecommenderScore8"
        />
        <TextField
          label="Reference Num1 Isrms Recommender Score9"
          source="referenceNum1IsrmsRecommenderScore9"
        />
        <TextField
          label="Reference Num1 Mse Recommendation Additional"
          source="referenceNum1MseRecommendationAdditional"
        />
        <TextField
          label="Reference Num1 Mse Recommendation Comparison"
          source="referenceNum1MseRecommendationComparison"
        />
        <TextField
          label="Reference Num1 Mse Recommendation How Known"
          source="referenceNum1MseRecommendationHowKnown"
        />
        <TextField
          label="Reference Num1 Mse Recommendation Project Performance"
          source="referenceNum1MseRecommendationProjectPerformance"
        />
        <TextField
          label="Reference Num1 Mse Recommendation Strengths Weakness"
          source="referenceNum1MseRecommendationStrengthsWeakness"
        />
        <TextField
          label="Reference Num1 Recommender Score1"
          source="referenceNum1RecommenderScore1"
        />
        <TextField
          label="Reference Num1 Recommender Score2"
          source="referenceNum1RecommenderScore2"
        />
        <TextField
          label="Reference Num1 Recommender Score3"
          source="referenceNum1RecommenderScore3"
        />
        <TextField
          label="Reference Num1 Recommender Score4"
          source="referenceNum1RecommenderScore4"
        />
        <TextField
          label="Reference Num1 Recommender Score5"
          source="referenceNum1RecommenderScore5"
        />
        <TextField
          label="Reference Num1 Recommender Score6"
          source="referenceNum1RecommenderScore6"
        />
        <TextField
          label="Reference Num1 Recommender Score7"
          source="referenceNum1RecommenderScore7"
        />
        <TextField
          label="Reference Num1 Recommender Score8"
          source="referenceNum1RecommenderScore8"
        />
      </Datagrid>
    </List>
  );
};
