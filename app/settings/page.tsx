import Header from "@/components/Header";

const SettingsPage = () => {
  return (
    <div>
      <Header headerText="Settings" />
      <div className="h-full max-w-[82rem]">
        <div className="pb-12">
          <h2 className="mt-6 font-medium text-gray-800">
            Personal information
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Update your information and profile details.
          </p>
          <form className="mt-6 flex max-w-xl flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="w-full">
                <label htmlFor="username" className="block text-sm font-medium">
                  <div className="flex items-center gap-2">
                    Name<div></div>
                  </div>
                </label>
                <div className="mt-2 flex w-full rounded-md text-sm shadow-sm duration-200">
                  <input
                    id="username"
                    required
                    placeholder="Eg. John Doe"
                    className="focus:ring-primary focus:border-primary block flex-grow rounded-md rounded-r-md border border-gray-300 py-2.5 px-2 text-sm disabled:opacity-60"
                    type="text"
                    value="Gilbert Zhuo"
                  ></input>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="disabled:cursor-pointer disabled:bg-opacity-20 bg-[#215abe] hover:bg-opacity-90 block appearance-none rounded-md px-4 py-2.5 text-sm font-medium text-white duration-100 focus:outline-none disabled:opacity-75"
              >
                <div className="relative flex items-center justify-center">
                  <div className="">Save changes</div>
                </div>
              </button>
            </div>
          </form>

          <h2 className="mt-8 font-medium text-gray-800">Danger Zone</h2>
          <p className="mt-2 text-sm text-gray-500">
            Manage your account and delete your account.
          </p>
          <div className="mt-4 max-w-xl">
            <div>
              <button className="hover:shadow-primary-600/20 inline-block appearance-none rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white duration-200 duration-100 hover:shadow-lg focus:outline-none disabled:opacity-80">
                Delete your account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
