import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Advocate = {
    id: string;
    firstName: string;
    lastName: string;
    city: string;
    degree: string;
    specialties: string[];
    yearsOfExperience: number;
    phoneNumber: number;
    createdAt: string;
  };

export const useAdvocates = (searchTerm: string | null) => {
    const query = searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : "";
    const { data, error, isLoading } = useSWR<{data: Advocate[]}>(`/api/advocates${query}`, fetcher);
    console.log('data', data)
    return { advocates: data?.data || [], advocatesError: error, advocatesAreLoading: isLoading };
  };