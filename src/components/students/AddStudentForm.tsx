import { useForm } from "react-hook-form";

export const AddStudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    // await addStudent(data);
    alert("Ученик добавлен!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("name", { required: "Имя обязательно" })}
          placeholder="Имя"
          className="p-2 border rounded w-full"
        />
        {/* {errors.name && <p className="text-red-500">{errors.name.message}</p>} */}
        {errors.name && <p className="text-red-500">Ошибка</p>}
      </div>

      <div>
        <input
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Некорректный email",
            },
          })}
          placeholder="Email"
          className="p-2 border rounded w-full"
        />
        {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
        {errors.email && <p className="text-red-500">Ошибка</p>}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Добавить
      </button>
    </form>
  );
};
