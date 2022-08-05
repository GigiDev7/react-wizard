import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { IUserState } from "../reducers/userReducer";
import { addUser } from "../actions/userActions";
import { countryData } from "../countriesData";

interface IProps {
  changeStep: () => void;
}

const UserInfo = ({ changeStep }: IProps) => {
  const userInfoSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too short")
      .max(20, "Too long")
      .required("Firstname is required"),
    lastname: Yup.string()
      .min(2, "Too short")
      .max(20, "Too long")
      .required("Lastname is required"),
    age: Yup.number().min(18, "Minimum age is 18").required("Age is required"),
    gender: Yup.string().required("Select gender"),
    residence: Yup.string()
      .required("Select country of residence")
      .notOneOf(["default"], "Please select your country"),
  });

  const { userInfo } = useSelector((state: { user: IUserState }) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (vals: any) => {
    dispatch(addUser(vals));
    changeStep();
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstname: userInfo?.firstname || "",
          lastname: userInfo?.lastname || "",
          age: userInfo?.age || "",
          gender: userInfo?.gender || "",
          residence: userInfo?.residence || "default",
          bio: userInfo?.bio || "",
        }}
        validationSchema={userInfoSchema}
        onSubmit={(vals) => {
          handleSubmit(vals);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-4 w-[500px]">
            <div className="flex flex-col ">
              <label className="font-semibold mb-1" htmlFor="firstname">
                Firstname
              </label>
              <Field
                type="text"
                id="firstname"
                className="border-black border-[1px] w-full py-1 pl-1"
                name="firstname"
              />
              {errors.firstname && touched.firstname ? (
                <span className="text-sm text-red-600">{errors.firstname}</span>
              ) : null}
            </div>
            <div className="flex flex-col ">
              <label className="font-semibold mb-1" htmlFor="lastname">
                Lastname
              </label>
              <Field
                type="text"
                className="border-black border-[1px] py-1 pl-1"
                id="lastname"
                name="lastname"
              />
              {errors.lastname && touched.lastname ? (
                <span className="text-sm text-red-600">{errors.lastname}</span>
              ) : null}
            </div>
            <div className="flex flex-col ">
              <label className="font-semibold mb-1" htmlFor="age">
                Age
              </label>
              <Field
                type="number"
                className="border-black border-[1px] py-1 pl-1"
                id="age"
                name="age"
              />
              {errors.age && touched.age ? (
                <span className="text-sm text-red-600">{errors.age}</span>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Country of residence</label>
              <Field
                className="border-black border-[1px] py-1 "
                name="residence"
                as="select"
              >
                <option value="default" disabled={true}>
                  Select country...
                </option>
                {countryData.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Field>
              {errors.residence && touched.residence ? (
                <span className="text-sm text-red-600">{errors.residence}</span>
              ) : null}
            </div>
            <div>
              <p className="font-semibold mb-1">Select Gender</p>
              <div className=" gap-1 inline-flex">
                <label>Male</label>
                <Field
                  className="border-black border-[1px]"
                  type="radio"
                  name="gender"
                  value="male"
                />
              </div>
              <div className="inline-flex ml-2 gap-1">
                <label>Female</label>
                <Field
                  className="border-black border-[1px]"
                  type="radio"
                  name="gender"
                  value="female"
                />
              </div>
              {errors.gender && touched.gender ? (
                <span className="block text-sm text-red-600">
                  {errors.gender}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mb-1">Bio</label>
              <Field
                maxLength={200}
                placeholder="Tell us something about yourself"
                name="bio"
                as="textarea"
                className="border-black border-[1px] pl-1"
              />
            </div>

            <button
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded mt-4 w-[40%] mx-auto text-white font-semibold"
              type="submit"
            >
              Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserInfo;
