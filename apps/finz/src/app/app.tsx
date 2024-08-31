import { DialogProvider } from '../packages/ui/organisms/dialog/context';
import { MainContent } from './main-content';

export function App() {
	return (
		<DialogProvider>
			<div>
				<MainContent />
			</div>
		</DialogProvider>
	);
}

export default App;
