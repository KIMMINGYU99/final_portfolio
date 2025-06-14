"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useProjectStore } from "@/store/projectStore";
import { getSkills, addProject, uploadProjectImage } from "@/utils";

const AddProject = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {
    formData,
    setFormData,
    availableSkills,
    setAvailableSkills,
    isLoading,
    setIsLoading,
    handleTechChange,
    isAuthenticated,
    checkPassword,
    setIsAuthenticated,
    resetForm,
  } = useProjectStore();

  const handlePasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (checkPassword(password)) {
      setError("");
    } else {
      setError("비밀번호가 올바르지 않습니다.");
    }
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skills = await getSkills();
        setAvailableSkills(skills);
      } catch (error) {
        console.error("기술 스택 로딩 에러:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkills();

    // 컴포넌트가 언마운트될 때 인증 상태 초기화
    return () => {
      setIsAuthenticated(false);
    };
  }, [setAvailableSkills, setIsLoading, setIsAuthenticated]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addProject({
        ...formData,
        created_at: new Date().toISOString(),
      });

      resetForm();
      setIsAuthenticated(false); // 프로젝트 추가 완료 시 인증 초기화
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("프로젝트 추가 에러:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const publicUrl = await uploadProjectImage(file);
      setFormData({ thumbnail: publicUrl });
    } catch (error) {
      console.error("이미지 업로드 에러:", error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-xl p-8">
          <h1 className="text-2xl font-bold text-center text-white mb-8">
            관리자 인증
          </h1>
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-white font-medium mb-2"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                required
              />
              {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              인증
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          새 프로젝트 추가
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-white font-medium mb-2"
            >
              프로젝트 제목
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-white font-medium mb-2"
            >
              프로젝트 설명
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="thumbnail"
              className="block text-white font-medium mb-2"
            >
              썸네일 이미지
            </label>
            <div className="space-y-4">
              <input
                type="file"
                id="thumbnail"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
              />
              {formData.thumbnail && (
                <div className="relative w-full h-48 rounded-md overflow-hidden">
                  <Image
                    src={formData.thumbnail}
                    alt="썸네일 미리보기"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="github"
                className="block text-white font-medium mb-2"
              >
                GitHub URL
              </label>
              <input
                type="url"
                id="github"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="demo"
                className="block text-white font-medium mb-2"
              >
                Demo URL
              </label>
              <input
                type="url"
                id="demo"
                name="demo"
                value={formData.demo}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="start_date"
                className="block text-white font-medium mb-2"
              >
                시작일
              </label>
              <input
                type="date"
                id="start_date"
                name="start_date"
                required
                value={formData.start_date}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="end_date"
                className="block text-white font-medium mb-2"
              >
                종료일
              </label>
              <input
                type="date"
                id="end_date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="role" className="block text-white font-medium mb-2">
              역할
            </label>
            <input
              type="text"
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-white font-medium mb-2"
            >
              상태
            </label>
            <select
              id="status"
              name="status"
              required
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            >
              <option value="in_progress">진행 중</option>
              <option value="completed">완료</option>
            </select>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">
              기술 스택
            </label>
            <div className="border border-gray-600 rounded-md p-4">
              {isLoading ? (
                <div className="animate-pulse space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 bg-gray-700 rounded-md"></div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {availableSkills.map((skill) => (
                    <label
                      key={skill.id}
                      className="flex items-center space-x-2 text-white cursor-pointer hover:bg-gray-700 p-2 rounded-md transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.technologies.includes(skill.name)}
                        onChange={() => handleTechChange(skill.name)}
                        className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-600 bg-gray-700 focus:ring-blue-500"
                      />
                      <span>{skill.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              프로젝트 추가
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
